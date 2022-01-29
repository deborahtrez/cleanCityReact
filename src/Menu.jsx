import React, { Component } from 'react';
import { Honeycomb, Hexagon } from 'react-honeycomb';
import range from "lodash/range";


const SIZE_OF_HEXAGON_SIDE = 100;
const MY_ITEMS = range(6)


class Menu extends Component {
    render() {
        return (
            <div>
                <Honeycomb
                    columns={2}
                    size={SIZE_OF_HEXAGON_SIDE}
                    items={MY_ITEMS}
                    renderItem={(item, index) => (

                        <Hexagon className="awesome-class-name">
                            <img
                                src={`https://picsum.photos/${SIZE_OF_HEXAGON_SIDE * 2}?random=${item}`}
                                alt={`Random #${item}`}
                            />
                            {/* <Nav />
                            <div>
                                <Route path ="/" exact component={Home} />
                            </div> */}
                        </Hexagon>
                        )}
                        
                />
            </div>
        );
    }
}

export default Menu;