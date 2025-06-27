import { useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { userStore } from "../../../entities/user/UserModel";
import { useUIContext } from "../../../UIProvider";

export const useChat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const user = userStore((state) => state.user);
    const { t } = useUIContext();

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: `${t("chatView.greetingMessage")}, ${user?.username}!`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://facebook.github.io/react/img/logo_og.png",
                },
            },
        ]);
    }, []);

    const onSend = (newMessages: IMessage[] = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages)
        );
    };
    return { messages, onSend, user };
};