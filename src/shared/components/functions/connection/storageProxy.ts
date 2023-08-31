import AsyncStorage from '@react-native-async-storage/async-storage';
import {Stringifier} from 'styled-components/native/dist/types';

export const setItemStorage = async (key: string, value: string) =>
  AsyncStorage.setItem(key, value);

export const getItemStorage = async (key: string) =>
  AsyncStorage.getItem(key).catch(() => '');

export const removeItemStorage = async (key: string) =>
  AsyncStorage.removeItem(key).catch();
