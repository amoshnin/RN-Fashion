// PLUGINS IMPORTS //
import React, { ReactElement, useCallback, useEffect, useState } from "react"
import { AsyncStorage } from "react-native"
import { AppLoading } from "expo"
import { Asset } from "expo-asset"
import * as Font from "expo-font"
import Constants from "expo-constants"
import { InitialState, NavigationContainer } from "@react-navigation/native"

// COMPONENTS IMPORTS //
const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

/////////////////////////////////////////////////////////////////////////////

export type FontSource = Parameters<typeof Font.loadAsync>[0]
const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
  useEffect(() => {
    ;(async () => {
      await Promise.all(promises)
      cb()
    })()
  })

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false)
  usePromiseAll(
    [
      Font.loadAsync(fonts),
      ...assets.map((asset) => Asset.loadAsync(asset) as any),
    ],
    () => setReady(true)
  )
  return ready
}

const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__)
  const [initialState, setInitialState] = useState<InitialState | undefined>()
  const ready = useLoadAssets(assets || [], fonts || {})
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        )
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined
        setInitialState(state)
      } finally {
        setIsNavigationReady(true)
      }
    }

    if (!isNavigationReady) {
      restoreState()
    }
  }, [isNavigationReady])
  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  )
  if (!ready || !isNavigationReady) {
    return <AppLoading />
  }
  return (
    <NavigationContainer
      theme={{ colors: { background: "white" } } as any}
      {...{ onStateChange, initialState }}
    >
      {children}
    </NavigationContainer>
  )
}

export default React.memo(LoadAssets)

type LoadAssetsProps = {
  fonts?: FontSource
  assets?: Array<number>
  children: ReactElement | Array<ReactElement>
}
