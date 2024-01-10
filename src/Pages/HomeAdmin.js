
// import { ItemProductAd } from "../components/common/ItemProductAd";
// import { useDispatch, useSelector } from "react-redux";

// import * as ProductService from '../service/ProductService'
// import { update } from "../redux/Slice/ProductSlice";
// import { useForm } from "react-hook-form";
// import { InputSign } from "../components/Field/InputSign";
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Header } from '../Layouts/Header';
import { AdminUser } from '../components/Admin/AdminUser/AdminUser';
import { AdminProduct } from '../components/Admin/AdminProduct/AdminProduct';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


export function HomeAdmin() {

  window.scrollTo({
    top: 0
  })

  const items = [
    getItem('Người dùng', 'user', <UserOutlined />,
      // getItem('Option 1', '1'),
      // getItem('Option 2', '2'),
      // getItem('Option 3', '3'),
      // getItem('Option 4', '4'),
    ),
    getItem('Sản phẩm', 'product', <AppstoreOutlined />,
      // getItem('Option 5', '5'),
      // getItem('Option 6', '6'),
      // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ),
    // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Option 11', '11'),
    //   getItem('Option 12', '12'),
    // ]),
  ];

  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return (
          <AdminUser />
        )
      case 'product':
        return (
          <AdminProduct />
        )

      default:
        return <></>
    }
  }

  const [valueOption, setValueOption] = useState("rỗng")
  const getValueOption = (data) => {
    setValueOption(data.key)
    console.log('dataaaValueOption', data.key);
  }
  return (

    <div style={{ marginTop: 160 }}>
      <Header hiddenOption={true} hiddenCart={true} hiddenSearch={true}></Header>
      <div style={{ display: "flex" }}>
        <Menu
          onClick={getValueOption}
          mode="inline"
          style={{
            width: 256,
            height: "100vh",
            boxShadow: "1px 1px 2px #ccc"
          }}
          items={items}
        />
        <div style={{ padding: 15 }}>
          {renderPage(valueOption)}
        </div>

      </div>
    </div>
  );



  // const dataProduct = useSelector((state) => state.product.dataProduct)
  // const dispash = useDispatch()

  // async function getData() {
  //   const res = await ProductService.getProductApi.getAllProduct()
  //   dispash(update(res.data))
  //   // return res.data

  // }

  // useEffect(() => {
  //   getData()
  // }, [])
  // console.log('dataaa', dataProduct);


  // const fields = [
  //   { name: "name", label: "Tên Sản Phẩm" },
  //   { name: "code", label: "Mã Sản Phẩm" },
  //   { name: "price", label: "Giá" },
  //   { name: "count store", label: "Số lượng trong kho" },
  //   { name: "discrip", label: "Mô tả" },

  //   // Thêm các trường khác nếu cần
  // ];

  // const { control, handleSubmit, formState } = useForm({});

  // const onSubmit = (data) => {
  //   console.log('dataaa', data);
  // }

  // return (
  //   <div className="homead-contain">
  //     <div className="hoad-products">
  //       <div style={{ display: "flex" }}>
  //         <input placeholder="filter" style={{ margin: "8px", }}></input>
  //         <button style={{ height: "30px", width: "60px", marginTop: "8px" }} >Tìm</button>
  //       </div>

  //       {
  //         dataProduct?.map((val) => {
  //           return (
  //             <ItemProductAd data={val} key={val.name} image={val.image} title={val.name} />
  //           )
  //         })
  //       }
  //     </div>

  //     <form onSubmit={handleSubmit(onSubmit)}
  //       className="hoad-detailproducts">
  //       <div style={{ width: 800, display: "flex", flexWrap: "wrap" }}>
  //         <img
  //           style={{ width: 250, height: 300, border: "solid 1px", marginRight: 10 }}
  //           src=""></img>

  //         <div style={{ width: 500, display: "flex", flexWrap: "wrap" }}>
  //           <InputSign
  //             style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
  //             control={control}
  //             formState={formState}
  //             fields={fields[0]}
  //             placeholder={fields[0].name}
  //           />

  //           <InputSign
  //             style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
  //             control={control}
  //             formState={formState}
  //             fields={fields[1]}
  //             placeholder={fields[1].name}
  //           />

  //           <InputSign
  //             style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
  //             control={control}
  //             formState={formState}
  //             fields={fields[2]}
  //             placeholder={fields[2].name}
  //           />

  //           <InputSign
  //             style={{ height: "50px", width: "230px", marginRight: 20, marginTop: 50 }}
  //             control={control}
  //             formState={formState}
  //             fields={fields[3]}
  //             placeholder={fields[3].name}
  //           />


  //         </div>

  //       </div>

  //       <button style={{ width: 100, height: 30, margin: "auto" }}>Lưu</button>
  //     </form>
  //   </div>
  // )
}
