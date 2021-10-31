import {
    HeadProtectionItems, HandProtectionItems, EarProtectionItems,
    EyeProtectionItems, FirstAidKitItems, ProtectiveClothingItems, CorporateUniformsItems
} from './ProtectionItems';

export default function ProductItems(props) {

    const productType = props.productType;
    const setProductView = props.setProductView;
    const innerProduct = props.innerProduct;

    if (innerProduct !== '') {
        return (
            <div className="inner-product-container row ">
                <div className="col-xs-12 col-sm-4">
                    <img className="inner-product-img" src={innerProduct.image_url} alt="" width="95%" height="200px"></img>
                </div>
                <div className="col-xs-12 col-sm-8 inner-product-info-container">
                    <h5 className="product-name inner-product-name">{innerProduct.name}</h5>
                    <ul>
                        <li>{innerProduct.desc1}</li>
                        <li>{innerProduct.desc2}</li>
                    </ul>
                </div>
            </div>
        )
    }
    else if (productType === 'Head protection') {
        return (
            HeadProtectionItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'Hand protection') {
        return (
            HandProtectionItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'Ear protection') {
        return (
            EarProtectionItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'Eye protection') {
        return (
            EyeProtectionItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'First aid kit') {
        return (
            FirstAidKitItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'Protective clothing') {
        return (
            ProtectiveClothingItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item">
                        <img src={item.image_url} alt="" width="200px" height="200px"></img>
                        <span className="product-name">{item.name}</span>
                    </div>
                )
            })
        )
    }
    else if (productType === 'Corporate Uniforms') {
        return (
            CorporateUniformsItems.map((item, index) => {
                return (
                    <div key={index} className="protection-item special" onClick={() => setProductView(item)}>
                        <img className="image" src={item.image_url} alt="" width="200px" height="200px" ></img>
                        <span className="product-name" >{item.name}</span>
                    </div>
                )
            })
        )
    }
}
