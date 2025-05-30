## Create APK
1) npm i --legacy-peer-deps           <!-- Installs versions of packages based on what's specified-->
2) cd android
3) ./gradlew clean                    <!-- cleans prev build environment -->
4) ./gradlew assembleRelease          <!-- creates new build -->

## Create AAB
1) cd android
2) ./gradlew clean
3) ./gradlew bundleRelease

## Add gradlew for IOS
1) ```cd android```
2) ```chmod +x gradlew```