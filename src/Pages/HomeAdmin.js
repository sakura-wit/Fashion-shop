import React, { useEffect } from "react";
import { ItemProductAd } from "../components/common/ItemProductAd";
import { useDispatch, useSelector } from "react-redux";

import * as ProductService from '../service/ProductService'
import { update } from "../redux/Slice/ProductSlice";
import { useForm } from "react-hook-form";
import { InputSign } from "../components/Field/InputSign";



export function HomeAdmin() {

  const dataProduct = useSelector((state) => state.product.dataProduct)
  const dispash = useDispatch()

  async function getData() {
    const res = await ProductService.getProductApi.getAllProduct()
    dispash(update(res.data))
    // return res.data

  }

  useEffect(() => {
    getData()
  }, [])
  console.log('dataaa', dataProduct);


  const fields = [
    { name: "name", label: "Tên Sản Phẩm" },
    { name: "code", label: "Mã Sản Phẩm" },
    { name: "price", label: "Giá" },
    { name: "count store", label: "Số lượng trong kho" },
    { name: "discrip", label: "Mô tả" },

    // Thêm các trường khác nếu cần
  ];

  const { control, handleSubmit, formState } = useForm({});

  const onSubmit = (data) => {
    console.log('dataaa', data);
  }

  return (
    <div className="homead-contain">
      <div className="hoad-products">
        <div style={{ display: "flex" }}>
          <input placeholder="filter" style={{ margin: "8px", }}></input>
          <button style={{ height: "30px", width: "60px", marginTop: "8px" }} >Tìm</button>
        </div>

        {
          dataProduct?.map((val) => {
            return (
              <ItemProductAd data={val} key={val.name} image={val.image} title={val.name} />
            )
          })
        }
      </div>

      <form onSubmit={handleSubmit(onSubmit)}
        className="hoad-detailproducts">
        <div style={{ width: 800, display: "flex", flexWrap: "wrap" }}>
          <img
            style={{ width: 250, height: 300, border: "solid 1px", marginRight: 10 }}
            src=""></img>

          <div style={{ width: 500, display: "flex", flexWrap: "wrap" }}>
            <InputSign
              style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
              control={control}
              formState={formState}
              fields={fields[0]}
              placeholder={fields[0].name}
            />

            <InputSign
              style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
              control={control}
              formState={formState}
              fields={fields[1]}
              placeholder={fields[1].name}
            />

            <InputSign
              style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
              control={control}
              formState={formState}
              fields={fields[2]}
              placeholder={fields[2].name}
            />

            <InputSign
              style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
              control={control}
              formState={formState}
              fields={fields[3]}
              placeholder={fields[3].name}
            />


          </div>

        </div>

        <button style={{ width: 100, height: 30, margin: "auto" }}>Lưu</button>
      </form>
    </div>
  )
}
