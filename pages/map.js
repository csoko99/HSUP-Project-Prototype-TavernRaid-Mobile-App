import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Markers from './markers.js'


export const Map = (props) => {
        return(
            
                <MapView
                    initialRegion={{
                        latitude: 48.31,
                        longitude: 21.56,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.09
                    }}
                    style={{absolute: true, width: '100%', height: '100%'}}
                >

                    {
                        Markers.map((location, index)=>(
                            <Marker
                                key={index}
                                coordinate = {{latitude:location.latitude,longitude:location.longitude}}
                                pinColor = {"purple"} // any color
                                title={location.title}
                                description={location.description}
                            />
                        ))
                    }
                    

                </MapView>
        );
    
}