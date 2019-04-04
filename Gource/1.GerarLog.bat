::Para não visualizar conteudo
@echo off

call gource --output-custom-log ".\bbwatch.log" 

:: caso precise de um log em formato xml concatenar com a linha abaixo
::| svn log -r 1:HEAD --xml --verbose --quiet > ".\bbwatch_log.xml"

exit