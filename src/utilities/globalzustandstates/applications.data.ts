import zustand from "zustand";

interface appsDataProps {
    name: string ,
    type: "app" | "webapp" | "catalog" | "notepad" | "settings",
    url?: string,
    icon: string,
    isPinned: boolean,
    id: number,
    isOpen: boolean,
    content?: object,
    value?: string | number,
}

// If app is type of app, not webapp - rendering component is declared
// in <BuildInAppContent /> component



const appsData: Array<appsDataProps> = [
  {
    name: "chrome",
    type: "webapp",
    url: "https://www.google.pl/?igu=1",
    icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
    isPinned: true,
    isOpen: false,
    id: 0,
  },
  {
    name: "calculator",
    type: "webapp",
    url: "https://www.desmos.com/scientific?lang=pl",
    icon: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Calculator_5122x.png",
    isPinned: false,
    isOpen: false,
    id: 1,
  },
  {
    name: "folder",
    type: "app",
    icon: "https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png",
    isPinned: false,
    isOpen: false,
    id: 2,
    content: {
      fileTXT: 1,
    },
  },
  {
    name: "Notepad",
    type: "notepad",
    icon: "https://th.bing.com/th/id/R.d2a13e8837af8f556306f2f15baa9f99?rik=lHb3ue49%2byZUlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fnotepad-icon.png&ehk=AVqy7iYtmxyD2CRz2PtqdgraXYzoaUXvwxAt0%2bWjUEI%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    id: 3,
    value: "",
  },
  {
    name: "Settings",
    type: "settings",
    icon: "https://th.bing.com/th/id/R.0762c1cfcce1a79c3008b0b90d6c10d2?rik=tTr8KNsJNJEmzA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgrafikartes%2fflat-retro-modern%2f512%2fsettings-icon.png&ehk=vNrt6BVQBgtCtxO71G23jZDYZpFCImlOe%2blbHyWdsAg%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    id: 4,
    value: "",
  },
]

interface useAppsDataZustand {
    appsData: Array<appsDataProps>,
    setAppsData: (data?: any) => void,
    updateAppData: (newData:any, index: number) => void,
};
  

export const useAppsData = zustand<useAppsDataZustand>((set: any) => ({
	appsData: appsData,
	updateAppData: (newData?: any, index?: number) => set((state: { appsData: any[]; }) => {
	  return {
		appsData: state.appsData.map((data: { id: number; }) => {
		  if (data.id === index) {
			  return newData;
		  }
		  return data;
		}
	  )};
	}),
	setAppsData: (data?: any[]) => set(() => ({ appsData: data}))
}));

// i know its not the best way to make it.

/* useEffect(() => {
  updateAppData({
      ...appsData[0],
      isOpen: true,
  }, 0);
  console.log(appsData)
},[]) */ 