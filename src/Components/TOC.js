import React, { Component } from 'react'

class TOC extends Component {
    
    render() {
        var lists = []
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
        lists.push(<li><a href={"/toc/"+data[i].id}>{data[i].title}</a></li>);
        i++;
        }

        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}

export default TOC
