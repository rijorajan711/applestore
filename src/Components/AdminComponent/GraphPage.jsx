import React, { useEffect, useState ,useContext} from "react";
import UserBarChart from "./UserBarChart";
import ProductPieChart from "./ProductPieChart";
import { getGraphDataAPI,getGraphProductCategoryDataAPI } from "../../axios/allAPI/adminAPI";
import { adminAddProductContext } from '../../Context/CreateContext'



function GraphPage() {

    const {adminAddProductRespose,setAdminAddProductRespose}=useContext(adminAddProductContext)

    const [userStatus, setUserStatus] = useState("");

    const [userData, setUserData] = useState({
        labels: ["Total Users", "Blocked Users", "Active Users"],
        datasets: [
            {
                label:"User Handle Information",
                data: [1, 2, 3],
                backgroundColor: ["#b3daff", "#e6ccff", "#ffccff"],
            },
        ],
    });

    const [productCategoryQuantity,setProductCategoryQuantity]=useState("")
    const [productCategoryCountData,setProductCategoryCountData]=useState( {
            labels: ["No.Of Phone", "No.of Lap", "No.of Earphone"],
            datasets: [
                {
                    label: "Product Category Information",
                    data: [1, 2, 3],
                    backgroundColor: ["#b3daff", "#e6ccff", "#ffccff"],
                },
            ],
        }  )

   
   
    const getGraphData = async () => {
        const result = await getGraphDataAPI();
        if (result.status === 200) {
            setUserStatus(result?.data);
        }
    };


    const getGraphProductCategoryData=async () => {
        const result = await getGraphProductCategoryDataAPI();
        if (result.status === 200) {
            setProductCategoryQuantity(result?.data);
        }
    };

    
    
    useEffect(()=>{
        setProductCategoryCountData({
            labels: ["No.Of Phone", "No.of Lap", "No.of Earphone"],
            datasets: [
                {
                    label: "Product Category Information",
                    data: productCategoryQuantity,
                    backgroundColor: ["#b3daff", "#e6ccff", "#ffccff"],
                },
            ],
        })

    },[productCategoryQuantity])

  
  
  
    useEffect(() => {
        getGraphData();
        getGraphProductCategoryData()
    }, [adminAddProductRespose]);

   
   
   
    useEffect(() => {
        setUserData({
            labels: ["Total Users", "Blocked Users", "Active Users"],
            datasets: [
                {
                    label: "User Handle information",
                    data: userStatus,
                    backgroundColor: ["#b3daff", "#e6ccff", "#ffccff"],
                },
            ],
        });
    }, [userStatus]);

  
  
  
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-slate-50  to-neutral-400 lg:pl-[40%] pt-10 pb-10 gap-16">
            <UserBarChart barChartData={userData}></UserBarChart>

            <div className="flex lg:flex-row flex-col ">
                <ProductPieChart PieChartData={productCategoryCountData} />
                <ProductPieChart PieChartData={userData} />
            </div>
        </div>
    );
}

export default GraphPage;
