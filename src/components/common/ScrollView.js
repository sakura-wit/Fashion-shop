import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export function ScrollView(props) {

    const [dataList, setDataList] = useState(Array.from({ length: 20 }))

    return (
        <div>
            <h4>Content</h4>
            <InfiniteScroll
                className="section"
                dataLength={dataList.length}
                hasMore={true}
                height={300}
            >
                {dataList.map((data, key) => {
                    return <div key={key} className="scr-titlescroll-contain">
                        Title for branch #{key + 1}
                    </div>
                })}

                {/* {dataList} */}
            </InfiniteScroll>
        </div>
    )
}