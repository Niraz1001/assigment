import { Button } from '@nextui-org/react'
import { CiSearch } from "react-icons/ci";
import React from 'react'

const Herosection = () => {
    return (
        

            <div>

                <div
                    style={{ color: "#219ebc", fontSize: "15px", paddingTop: "50px", textAlign: "center",}}><span>No.1 Jobs hunt website</span>
                </div>

                <div
                    style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}
                > Search, Apply & <br /> Get Your <span style={{ color: "#219ebc" }}>Dream Jobs</span>
                </div>

               <div
                style={{display:"flex", boxShadow:"revert-layer", border:" solid gray 2px", paddingLeft:"20px", margin:"50px",marginLeft:"25%", marginRight:"25%", borderRadius:"20px" ,alignItems:"center", gap:"3"}}
                >
               <input
                    type="text"
                    placeholder='Find your dream jobs'
                    className='outline-none border-none w-full'
                />
                 <Button style={{backgroundColor: "#219ebc", color:"white", borderRadius:"18px"}}>
                     <CiSearch className='h-6 w-6' />
                    </Button>

                </div> 
            </div>

        
    )
}

export default Herosection