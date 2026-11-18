import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ToastMsg {
  id: number;
  texto: string;
  acao?: { rotulo: string; onPress: () => void };
}

const Ctx = createContext<(texto: string, acao?: ToastMsg['acao']) => void>(() => {});

export function useToast() {
  return useContext(Ctx);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<ToastMsg | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const insets = useSafeAreaInsets();

  const mostrar = useCallback((texto: string, acao?: ToastMsg['acao']) => {
    if (timer.current) clearTimeout(timer.current);
    setMsg({ id: Date.now(), texto, acao });
    timer.current = setTimeout(() => setMsg(null), acao ? 6000 : 3200);
  }, []);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <Ctx.Provider value={mostrar}>
      {children}
      {msg ? (
        <View pointerEvents="box-none" className="absolute left-0 right-0 items-center px-4" style={{ bottom: insets.bottom + 72 }}>
          <View accessibilityLiveRegion="polite" className="max-w-[520px] flex-row items-center rounded-lg bg-[#2F2F2F] px-4 py-3 shadow-lg">
            <Text className="flex-1 text-[14px] text-white">{msg.texto}</Text>
            {msg.acao ? (
              <Pressable
                accessibilityRole="button"
                onPress={() => {
                  msg.acao?.onPress();
                  setMsg(null);
                }}
                className="ml-3 rounded px-2 py-1 hover:bg-white/10"
              >
                <Text className="text-[14px] font-semibold text-[#529CCA]">{msg.acao.rotulo}</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      ) : null}
    </Ctx.Provider>
  );
}
