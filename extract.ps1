$svg = Get-Content -Path 'public\logo.svg' -Raw
if ($svg -match 'data:image/png;base64,([^"]+)') {
    $base64 = $matches[1]
    $bytes = [Convert]::FromBase64String($base64)
    [IO.File]::WriteAllBytes("$PWD\public\opengraph-image.png", $bytes)
    Write-Host 'Successfully extracted opengraph-image.png'
} else {
    Write-Host 'Base64 string not found'
}
