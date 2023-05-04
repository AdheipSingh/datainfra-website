import Layout from "@theme/Layout"
import React from "react"

const product = () => {
    return (
        <Layout>
            <div className="relatiive">
                <img
                    src={"img/herobg.svg"}
                    className="w-full h-screen object-cover"
                />

                <div className="absolute left-20 top-40 max-w-[85vw] mx-auto w-full">
                    <div className="text-4xl text-white font-extrabold">
                        Kubernetes is ready for running data
                    </div>
                    <div className="text-white max-w-2xl text-lg my-2">
                        We dejoy working with disning clients, people for whom
                        qualuty, service, integrity & aesthetics.We dejoy
                        working.
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default product
