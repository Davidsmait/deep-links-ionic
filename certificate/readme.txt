ALIAS: app
PASWORD: app2024

keytool -genkeypair -v -keystore certificate/app.keystore -alias app -keyalg RSA -keysize 2048 -validity 10000
