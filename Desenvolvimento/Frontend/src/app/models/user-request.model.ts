import User from './user.model'
import Doctor from './doctor.model'

export default class UserRequest {
	public user: User
	public doctor: Doctor

	constructor(){
		this.user = new User()
		this.doctor = new Doctor()
	}
}
