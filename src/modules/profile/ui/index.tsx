import React from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { useProfile } from '../presenters/useProfile';
import { userStore } from '../../../entities/user/UserModel';
import { ProfileRow } from './components/profileRow';
import { ColorThemeIcon } from '../../../../assets/icons/ColorThemeIcon';
import { LanguageIcon } from '../../../../assets/icons/LanguageIcon';
import { WishListIcon } from '../../../../assets/icons/WishListIcon';
import { AboutUsIcon } from '../../../../assets/icons/AboutUsIcon';
import { SettingsIcon } from '../../../../assets/icons/SettingsIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const ProfileView = () => {
    const { user } = userStore();
    const { logout } = useProfile();
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToChangeTheme = () => { navigation.navigate("ThemeView"); };
    const onGoToChangeLanguage = () => { navigation.navigate("LanguageView"); };
    const onGoToChangeWishList = () => { navigation.navigate("WishListView"); };
    const onGoTOChangeSettings = () => { navigation.navigate("SettingsView") };
    const onGoTOChangeAboutUs = () => { navigation.navigate("AboutUsView") };


    return (
        <View style={styles.container}>
            <Text style={styles.message}>Hello, {user?.username}!</Text>
            <Text style={styles.message}> Press "Logout" to leave your profile and close the App.</Text>
            <ProfileRow title="Language" icon={<LanguageIcon />} onPress={onGoToChangeLanguage} />
            <ProfileRow title="Colors theme" icon={<ColorThemeIcon />} onPress={onGoToChangeTheme} />
            <ProfileRow title="WishList" icon={<WishListIcon />} onPress={onGoToChangeWishList} />
            <ProfileRow title="Settings" icon={<SettingsIcon />} onPress={onGoTOChangeSettings} />
            <ProfileRow title="About us" icon={<AboutUsIcon />} onPress={onGoTOChangeAboutUs} />
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

