const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool
const AWS = require('aws-sdk')
const request = require('request')
const jwkToPem = require('jwk-to-pem')
const jwt = require('jsonwebtoken')
const userService = require('../services/user.service')
const doctorService = require('../services/doctor.service')
global.fetch = require('node-fetch')
const cognitoConf = require('../../config/cognito')
console.log(cognitoConf)

const poolData = {
  UserPoolId: cognitoConf.UserPoolId,
  ClientId: cognitoConf.ClientId
}
const pool_region = cognitoConf.pool_region

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

module.exports = {
  RegisterUser: async data => {
    console.log('authService - register')
    const { email, password } = data.user
    var attributeList = []
    delete data.user.password
    let user = await userService.set(data)
    console.log({ user })
    if (data.doctor.isDoctor === false || user.doctor.id)
      if (user.user.id)
        return new Promise((resolve, reject) => {
          userPool.signUp(
            email,
            password,
            attributeList,
            null,
            (err, result) => {
              if (err) {
                console.log(err)
                return
              }
              const cognitoUser = result.user
              console.log('user name is ' + cognitoUser.getUsername())
              return resolve({
                mess: 'user name is ' + cognitoUser.getUsername()
              })
            }
          )
        })
      else return { err: 'erro ao registrar usuário' }
  },
  Login: async data => {
    console.log('authService - login')
    const { email, password } = data
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      {
        Username: email,
        Password: password
      }
    )
    let user = await userService.get({ email })
    let doctor = []
    if (user.length > 0) {
      doctor = await doctorService.get({ id_usuario: user[0].id })
    } else {
      return {
        err: {
          message: 'Nome de usuário ou senha incorretos'
        }
      }
    }
    console.log(doctor)

    var userData = {
      Username: email,
      Pool: userPool
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
    return new Promise(resolve => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          // console.log('access token + ' + result.getAccessToken().getJwtToken())
          // console.log('id token + ' + result.getIdToken().getJwtToken())
          // console.log('refresh token + ' + result.getRefreshToken().getToken())

          return resolve({
            success: {
              message: 'Bem vindo!',
              token: result.getIdToken().getJwtToken(),
              admin: user[0].admin === 1,
              doctor: doctor.length > 0,
              userId: user[0].id
            }
          })
        },
        onFailure: err => {
          console.log(err)
          return resolve({
            err: {
              message: 'Nome de usuário ou senha incorretos'
            }
          })
        }
      })
    })
  },

  ValidateToken: token => {
    request(
      {
        url: `https://cognito-idp.${pool_region}.amazonaws.com/${
          poolData.UserPoolId
        }/.well-known/jwks.json`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const pems = {}
          var keys = body['keys']
          for (var i = 0; i < keys.length; i++) {
            //Convert each key to PEM
            var key_id = keys[i].kid
            var modulus = keys[i].n
            var exponent = keys[i].e
            var key_type = keys[i].kty
            var jwk = { kty: key_type, n: modulus, e: exponent }
            var jwkpem = jwkToPem(jwk)
            pems[key_id] = jwkpem
          }
          //validate the token
          var decodedJwt = jwt.decode(token, { complete: true })
          if (!decodedJwt) {
            console.log('Not a valid JWT token')
            return
          }

          var kid = decodedJwt.header.kid
          var pem = pems[kid]
          if (!pem) {
            console.log('Invalid token')
            return
          }

          jwt.verify(token, pem, (err, payload) => {
            if (err) {
              console.log('Invalid Token.')
            } else {
              console.log('Valid Token.')
              console.log(payload)
            }
          })
        } else {
          console.log('Error! Unable to download JWKs')
        }
      }
    )
  },
  renew: data => {
    const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({
      RefreshToken: 'your_refresh_token_from_a_previous_login'
    })

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
    const { email } = data
    const userData = {
      Username: email,
      Pool: userPool
    }

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    cognitoUser.refreshSession(RefreshToken, (err, session) => {
      if (err) {
        console.log(err)
      } else {
        let retObj = {
          access_token: session.accessToken.jwtToken,
          id_token: session.idToken.jwtToken,
          refresh_token: session.refreshToken.token
        }
        console.log(retObj)
      }
    })
  },

  ChangePassword: (username, password, newpassword) => {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      {
        Username: username,
        Password: password
      }
    )

    var userData = {
      Username: username,
      Pool: userPool
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        cognitoUser.changePassword(password, newpassword, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log('Successfully changed password of the user.')
            console.log(result)
          }
        })
      },
      onFailure: err => {
        console.log(err)
      }
    })
  },
  ForgotenPassword: data => {
    const { email } = data
    const userData = {
      Username: email,
      Pool: userPool
    }

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
    cognitoUser.forgotPassword({
      onSuccess: function(result) {
        console.log('call result: ' + result)
      },
      onFailure: function(err) {
        console.log(err)
      },
      inputVerificationCode() {
        // var verificationCode = prompt('Please input verification code ', '')
        // var newPassword = prompt('Enter new password ', '')
        // cognitoUser.confirmPassword(verificationCode, newPassword, this)
      }
    })
  },
  confirmPassword: data => {
    const { verificationCode, newPassword, email } = data
    const userData = {
      Username: email,
      Pool: userPool
    }

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
    cognitoUser.confirmPassword(verificationCode, newPassword, this)
  },
  SignUserOut: data => {
    const { email } = data

    const userData = {
      Username: email,
      Pool: userPool
    }

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    if (cognitoUser != null) {
      cognitoUser.signOut()
    }
    return { userSignedOut: true }
  }
}
