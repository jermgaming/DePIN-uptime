import { API_BACKEND_URL } from "@/config";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";

interface Website {
    id: string;
    url: string;
    ticks:{
        id:string;
        createdAt: string;
        status: string;
        latency: number;
    }[];
}

export function useWebsite(){
    const { getToken } = useAuth();

    async function refreshWebsites() {
        const token = await getToken();
        const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(()=>{
        
    },[]);

}
