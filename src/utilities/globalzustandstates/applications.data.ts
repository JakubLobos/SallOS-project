import zustand from "zustand";

interface appsDataProps {
    name: string,
    url: string,
    icon: string,
    isPinned: boolean,
    id: number,
    isOpen: boolean,
    content?: object,
}

const appsData: Array<appsDataProps> = [
  {
    name: "chrome",
    url: "https://www.google.pl/?igu=1",
    icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
    isPinned: true,
    isOpen: false,
    id: 0,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    icon: "https://www.queeky.com/sites/default/files/images/YouTube-icon-full_color_0.png",
    isPinned: false,
    isOpen: false,
    id: 1,
  },
  {
    name: "folder",
    url: "https://www.youtube.com/",
    icon: "https://www.queeky.com/sites/default/files/images/YouTube-icon-full_color_0.png",
    isPinned: false,
    isOpen: false,
    id: 2,
    content: {
      fileTXT: 1,
    },
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