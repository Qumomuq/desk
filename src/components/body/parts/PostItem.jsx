import React from 'react';
import future from "./Future";

const PostItem = (props) => {
    return (
        <div className=" mt-4 flex justify-between items-center mr-3 border-4 border-gray-200 rounded-lg" >
            <strong className="w-1/3">{props.number}. {props.post.title}</strong>
            <div className="h-14">
                Лицензия будет действительна до:
                <div className="flex justify-center rounded-2xl bg-gray-300">{props.post.body}</div>
            </div>
            <div>
                <button className=" hover:bg-gray-900 hover:text-white p-2 mr-3 border-2 border-blue-900 rounded-lg ">Изменить</button>
                <button  onClick={()=> props.remove(props.post)} className="hover:bg-red-400 hover:text-white p-2 mr-3 border-2 border-blue-900 rounded-lg">Удалить</button>
            </div>

        </div>
    );
};

export default PostItem;
