import zustand from "zustand";

export interface appsDataProps {
    name: string ,
    type: string,
    url?: string,
    icon: string,
    isPinned: boolean,
    id: number,
    isOpen: boolean,
    isHidden: boolean,
    isFocused: boolean,
    content?: object,
    value?: string | number,
    usage?: "tool" | "social",
}

// If app is type of app, not webapp - rendering component is declared
// in <BuildInAppContent /> component



export const appsData: Array<appsDataProps> = [
  {
    name: "chrome",
    type: "webapp",
    url: "https://www.google.pl/?igu=1",
    icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
    isPinned: true,
    isOpen: false,
    isHidden: false,
    isFocused: false,
    id: 0,
  },
  {
    name: "calculator",
    type: "webapp",
    url: "https://www.desmos.com/scientific?lang=pl",
    icon: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Calculator_5122x.png",
    isPinned: false,
    isOpen: false,
    isHidden: false,
    isFocused: false,
    id: 1,
    usage: "tool",
  },
  {
    name: "Folder",
    type: "folder",
    icon: "https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png",
    isPinned: false,
    isOpen: false,
    isHidden: false,
    isFocused: false,
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
    isHidden: false,
    isFocused: false,
    id: 3,
    value: "",
  },
  {
    name: "Readme.ntpd",
    type: "notepad",
    icon: "https://th.bing.com/th/id/R.d2a13e8837af8f556306f2f15baa9f99?rik=lHb3ue49%2byZUlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fnotepad-icon.png&ehk=AVqy7iYtmxyD2CRz2PtqdgraXYzoaUXvwxAt0%2bWjUEI%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    isHidden: false,
    isFocused: false,
    id: 4,
    value: "Welcome in SallOS! \nUseful features: \n\n- Click on opened app to focus it, and make it more accesible than other opened apps!\n\n- Use console to add your own apps, and wallpapers, and don't forget to customize your desktop by Settings app. \n\n- You can save notepad file on desktop. Use save button below!\n\n- Right-click on app to pin, or hide from desktop.\n\n- You can click on the arrow next to the clock to see more information about today",
  },
  {
    name: "Wallpapers",
    type: "wallpapers",
    icon: "https://th.bing.com/th/id/R.0762c1cfcce1a79c3008b0b90d6c10d2?rik=tTr8KNsJNJEmzA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgrafikartes%2fflat-retro-modern%2f512%2fsettings-icon.png&ehk=vNrt6BVQBgtCtxO71G23jZDYZpFCImlOe%2blbHyWdsAg%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    isHidden: true,
    isFocused: false,
    usage: "tool",
    id: 5, //used id in SettingsButtons Component, don't change this id, if you don't know whats you doing!
  },
  {
    name: "Settings",
    type: "settings",
    icon: "https://th.bing.com/th/id/R.0762c1cfcce1a79c3008b0b90d6c10d2?rik=tTr8KNsJNJEmzA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgrafikartes%2fflat-retro-modern%2f512%2fsettings-icon.png&ehk=vNrt6BVQBgtCtxO71G23jZDYZpFCImlOe%2blbHyWdsAg%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    isHidden: false,
    isFocused: false,
    usage: "tool",
    id: 6,
  },
  {
    name: "Console",
    type: "console",
    icon: "https://simplecodetips.com/wp-content/uploads/2017/01/Linux-Terminal-icon.png",
    isPinned: false,
    isOpen: false,
    isHidden: false,
    isFocused: false,
    usage: "tool",
    id: 7,
  },
  {
    name: "User",
    type: "myprofile",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561845.png",
    isPinned: false,
    isOpen: false,
    isHidden: true,
    isFocused: false,
    usage: "social",
    id: 8, //hard-coded in 
  },
  {
    name: "console documentation.ntpd",
    type: "notepad",
    icon: "https://th.bing.com/th/id/R.d2a13e8837af8f556306f2f15baa9f99?rik=lHb3ue49%2byZUlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fnotepad-icon.png&ehk=AVqy7iYtmxyD2CRz2PtqdgraXYzoaUXvwxAt0%2bWjUEI%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    isHidden: true,
    isFocused: false,
    id: 9, //hard-coded in Console.service.ts
    value: "Console usage (docs): \n\n1) change console color: color (color)\nExample: color red \n\n2) Ask console to log your text: \nsay (your text)\nExample: say hello world! \n\n3) install new wallpaper: \ninstall wallpaper (source - url) (name)\nExample: install wallpaper https://th.bing.com/th/id/R.f47f9400544edc84c693809a6907ed76?rik=8NJhYhyiMqjHkw&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f4%2fa%2fe%2f723576.jpg&ehk=tiVVpGcIOmWT%2ft5L0%2bQsTGyP%2bgb20rFMb2E0ufHmBNw%3d&risl=&pid=ImgRaw&r=0 secretwallpaper \n\n4) clear console\nclear\nExample: clear \n\n5) Install new app\ninstall app (source - only website url) (name)\nExample: install app https://www.calculator.com/ calculator"
  },
  {
    name: "Iconpainter",
    type: "iconcustomization",
    icon: "https://th.bing.com/th/id/R.191b03470fff24ff741908ef57ef92ed?rik=btBo2XLt40eMzA&riu=http%3a%2f%2fwww.xlmsolutions.com%2fwp-content%2fuploads%2f2017%2f06%2fcustomization.png&ehk=XEWCadJpytoeSjGvWPCVXPqoBSepkRN%2fVUuWoKN1ieA%3d&risl=&pid=ImgRaw&r=0",
    isPinned: false,
    isOpen: false,
    isHidden: true,
    isFocused: false,
    usage: "tool",
    id: 10, //used id in SettingsButtons Component, don't change this id, if you don't know whats you doing!
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

// its not the best way to make it.

/* useEffect(() => {
  updateAppData({
      ...appsData[0],
      isOpen: true,
  }, 0);
  console.log(appsData)
},[]) */ 