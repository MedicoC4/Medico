import React from 'react'
import './addProduct.css'

const AddProduct = () => {
  return (
    <div className='biggest_container_ever'>
      <div className='left_div_add_details'>
        <div className='product_information_add'>
          <p className='addproduct_title'>Product Information</p>
          <div className='addproduct_input_div'>
              <p className='input_title_add'>Product Name</p>
              <input type="text" placeholder='Enter product name' className='big_add_inputs' />
          </div>
          <div className='addproduct_input_div'>
              <p className='input_title_add'>Product Description</p>
              <input type="text" placeholder='Enter a brief description' className='big_add_inputs' />
          </div>
          <div className='add_side_effects'>
          <p className='input_title_add'>Key Features</p>
          <div className='side_effects_inputs'>
            <input type="text" placeholder='Enter a side effects' className='sub_add_inputs'/>
            <input type="text" placeholder='Enter a side effects' className='sub_add_inputs'/>
            <input type="text" placeholder='Enter a side effects' className='sub_add_inputs'/>
            <input type="text" placeholder='Enter a side effects' className='sub_add_inputs'/>
          </div>
          </div>
        </div>
        <div className='product_information_add'>
        <p className='addproduct_title'>Product</p>
          <div className='image_container_and_title'>
          <p className='input_title_add'>Cover Image</p>
          <div className='white_image_holder'>
            <button type='button' className='button_uploader_add'>Upload Image</button>
          </div>
          </div>
        </div>
        <div className='product_information_add'>
        <p className='addproduct_title'>Product Price</p>
        <div className='addproduct_input_div'>
              <p className='input_title_add'>Price</p>
              <input type="text" placeholder='  $' className='big_add_inputs' />
          </div>
        </div>
        <div className='product_information_add'>
        <p className='addproduct_title'>Product Category</p>
        <div className='addproduct_input_div'>
              <p className='input_title_add'>Category</p>
              <select name="category" id="" className='big_add_inputs'></select>
          </div>
        </div>
      </div>
      <div className='right_div_add_details'>
        <div className='product_information_add'>
          <div className='top_preview_add_image'>
        <p className='addproduct_title'>Product Preview</p>
        <i className="material-icons">&#xe5d0;</i>
        </div>
        <img src="" alt="" className='image_preview_holder'/>
        <div className='bottom_preview_add_image'>
        <p className='addproduct_title'>Article Details</p>
        <button type='button' className='save_draft_image'>Save</button>
        </div>
        </div>
        <div className='product_information_add'>
          <div className='buttons_save_add_collection'>
            <button className='saving_buttons_add'>Publish</button>
            <button className='saving_buttons_add'>Schedule</button>
            <p className='addproduct_title' id='belong_to_buttons'>Save Draft</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct