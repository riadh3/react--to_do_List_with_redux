import React from 'react'
import {connect} from 'react-redux'
import {onDeliteItem, onEditItem} from './actions'


const Item = ({ list, onDeliteItem=()=>{}, onEditItem=()=>{} }) => {


    return (
        list ?

            list.map((item, index) => (
                <div key={index} className='item-to-add'>
                    <div className='icon-item'>
                        <i className="fas fa-check"></i>
                    </div>
                    <div className='item-center' >
                        <div className='text-item'>
                            {item}
                        </div>
                        <div className='modify-div'>
                            <div 
                            onClick={() => onDeliteItem(index)}
                            >
                                <i className="fas edit fa-trash-alt"
                                    title="Move to trash"></i>
                            </div>
                            <div 
                            onClick={() =>onEditItem(item, index)}
                            >
                                <i className="fa fa-pencil-alt edit" title='Edit note'></i>
                            </div>

                        </div>

                    </div>
                </div>
            ))
            : null
    )
}


const mapStateToProps = state =>{
    return{
        list:state.list
    }
}

const mapDispatchToProps =dispatch=>{
    return{
        onDeliteItem : index=>{dispatch(onDeliteItem(index))},
        onEditItem:(item, index)=>{dispatch(onEditItem(item, index))}
    }
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer

