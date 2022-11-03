import zustand from "zustand";

interface SessionState {
    sessionUser: any,
    setSessionUser: (user?: any) => void,
  }
  
export const useSession = zustand<SessionState>((set: any) => ({
    sessionUser: {},
    setSessionUser: (user?: any) => set(() => ({ sessionUser: user }))
}));