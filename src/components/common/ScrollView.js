import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export function ScrollView(props) {

    const [dataList, setDataList] = useState(Array.from({ length: 20 }))

    const { data } = props

    // console.log('branch', data.name);


    return (
        <div>
            <h4>Content</h4>
            <InfiniteScroll
                className="section"
                dataLength={data.branch.length}
                hasMore={true}
                height={300}
            >
                {data.branch?.map((val, key) => {
                    return <div key={key} className="scr-titlescroll-contain">
                        {val}
                    </div>
                })}

                {/* {dataList} */}
            </InfiniteScroll>
        </div>
    )
}