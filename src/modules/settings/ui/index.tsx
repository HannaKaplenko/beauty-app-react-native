import React from 'react';
import { getStyles } from './styles';
import { Text, View } from 'react-native';
import { SettingsRow } from './components/settingsRow';
import { ColorThemeIcon } from '../../../../assets/icons/ColorThemeIcon';
import { LanguageIcon } from '../../../../assets/icons/LanguageIcon';
import { WishListIcon } from '../../../../assets/icons/WishListIcon';
import { AboutUsIcon } from '../../../../assets/icons/AboutUsIcon';
import { SettingsIcon } from '../../../../assets/icons/SettingsIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUIContext } from '../../../UIProvider';

export const SettingsView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors); 
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToChangeTheme = () => { navigation.navigate("ThemeView"); };
    const onGoToChangeLocale = () => { navigation.navigate("LanguageView"); };
    const onGoToChangeWishList = () => { navigation.navigate("WishListView"); };

    return (
        <View style={styles.container}>
            <Text style={styles.message}> {t("settings.title")}</Text>
            <SettingsRow title="Delivery" icon={<SettingsIcon />} onPress={onGoToChangeLocale} />
            <SettingsRow title='My discount' icon={<SettingsIcon />} onPress={onGoToChangeTheme} />
            <SettingsRow title="My information" icon={<SettingsIcon />} onPress={onGoToChangeWishList} />
            <Text style={styles.message}> "Your message"</Text>
        </View>
    );
};

