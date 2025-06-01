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

export const ProfileView = () => {
    const { user } = userStore();
    const { logout } = useProfile();

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Hello, {user?.username}!</Text>
            <Text style={styles.message}> Press "Logout" to leave your profile and close the App.</Text>
            <ProfileRow title="Language" icon={<LanguageIcon />} />
            <ProfileRow title="Colors theme" icon={<ColorThemeIcon />} />
            <ProfileRow title="WishList" icon={<WishListIcon />} />
            <ProfileRow title="Settings" icon={<SettingsIcon />} />
            <ProfileRow title="About us" icon={<AboutUsIcon />} />
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

