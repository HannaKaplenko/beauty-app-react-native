import React, { useEffect } from 'react';
import { getStyles } from './styles';
import { Text, View } from 'react-native';
import { useProfile } from '../presenters/useProfile';
import { userStore } from '../../../entities/user/UserModel';
import { ProfileRow } from './components/profileRow';
import { ColorThemeIcon } from '../../../../assets/icons/ColorThemeIcon';
import { LanguageIcon } from '../../../../assets/icons/LanguageIcon';
import { WishListIcon } from '../../../../assets/icons/WishListIcon';
import { AboutUsIcon } from '../../../../assets/icons/AboutUsIcon';
import { SettingsIcon } from '../../../../assets/icons/SettingsIcon';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUIContext } from '../../../UIProvider';
import { CustomButton } from '../../../UIKit/CustomButton';

export const ProfileView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { user } = userStore();
    const { logout } = useProfile();
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToChangeTheme = () => { navigation.navigate("ThemeView"); };
    const onGoToChangeLocale = () => { navigation.navigate("LanguageView"); };
    const onGoToChangeWishList = () => { navigation.navigate("WishListView"); };
    const onGoToChangeSettings = () => { navigation.navigate("SettingsView") };
    const onGoToChangeAboutUs = () => { navigation.navigate("AboutUsView") };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{t("settings.greetingMessage")} {user?.username}!</Text>
            <Text style={styles.message}> {t("settings.title")}</Text>
            <ProfileRow title={t("settings.language")} icon={<LanguageIcon />} onPress={onGoToChangeLocale} />
            <ProfileRow title={t("settings.theme")} icon={<ColorThemeIcon />} onPress={onGoToChangeTheme} />
            <ProfileRow title={t("settings.wishList")} icon={<WishListIcon />} onPress={onGoToChangeWishList} />
            <ProfileRow title={t("settings.settings")} icon={<SettingsIcon />} onPress={onGoToChangeSettings} />
            <ProfileRow title={t("settings.aboutUs")} icon={<AboutUsIcon />} onPress={onGoToChangeAboutUs} />
            <Text style={styles.message}> {t("settings.leaveProfileMessage")}</Text>
            <CustomButton text={t("settings.buttonText")} onPress={logout} containerStyle={styles.button} />
        </View>
    );
};

