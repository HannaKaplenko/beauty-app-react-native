import React, { } from "react";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";
import { GiftedChat } from 'react-native-gifted-chat';
import { userStore } from "../../../entities/user/UserModel";
import { useChat } from "../presenters/useChat";

export const ChatView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);
    const { messages, onSend } = useChat();
    const { user } = userStore();

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: user?.username || 'You',
                }}
            />
        </View>
    );
};

export default ChatView;