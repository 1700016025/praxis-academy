param(
[string]$ComputerName
)

Get-WmiObject -Class Win32_OperatingSystem –ComputerName $ComputerName |
Select-Object -Property CSName,@{n=”Last Booted”;

e={[Management.ManagementDateTimeConverter]::ToDateTime($_.LastBootUpTime)}}