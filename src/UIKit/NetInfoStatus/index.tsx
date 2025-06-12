import React, {FC, useEffect,useMemo} from "react";
import { View } from "react-native";
import {}
import { useNetInfoInstance } from "@react-native-community/netinfo";

const { netInfo: { type, isConnected }, refresh } = useNetInfoInstance();