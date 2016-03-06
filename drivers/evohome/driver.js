module.exports.capabilities = {
    measure_temperature: {
        
        // this function is called by Homey when it wants to GET the hue state, e.g. when the user loads the smartphone interface
        // `device_data` is the object as saved during pairing
        // `callback` should return the current value in the format callback( err, value )
        get: function( device_data, callback ){
            
            // get the bulb with a locally defined function
            var bulb = getBulb( device_data.id );
            if( bulb instanceof Error ) return callback( bulb );
                        
            // send the hue to Homey
            if( typeof callback == 'function' ) {
                callback( null, bulb.state.hue );
            }
        },
        
        // this function is called by Homey when it wants to SET the hue state, e.g. when the user says 'red lights'
        // `device_data` is the object as saved during pairing
        // `hue` is the new value
        // `callback` should return the new value in the format callback( err, value )
        set: function( device_data, hue, callback ) {			
            var bulb = getBulb( device_data.id );
            if( bulb instanceof Error ) return callback( bulb );
                        
            bulb.state.hue = hue;
            bulb.state.temperature = false;
            updateBulb( device_data.id );
            
            // send the hue to Homey
            if( typeof callback == 'function' ) {
                callback( null, bulb.state.hue );
            }
        }
    }
	target_temperature: {
        
        // this function is called by Homey when it wants to GET the hue state, e.g. when the user loads the smartphone interface
        // `device_data` is the object as saved during pairing
        // `callback` should return the current value in the format callback( err, value )
        get: function( device_data, callback ){
            
            // get the bulb with a locally defined function
            var bulb = getBulb( device_data.id );
            if( bulb instanceof Error ) return callback( bulb );
                        
            // send the hue to Homey
            if( typeof callback == 'function' ) {
                callback( null, bulb.state.hue );
            }
        },
        
        // this function is called by Homey when it wants to SET the hue state, e.g. when the user says 'red lights'
        // `device_data` is the object as saved during pairing
        // `hue` is the new value
        // `callback` should return the new value in the format callback( err, value )
        set: function( device_data, hue, callback ) {			
            var bulb = getBulb( device_data.id );
            if( bulb instanceof Error ) return callback( bulb );
                        
            bulb.state.hue = hue;
            bulb.state.temperature = false;
            updateBulb( device_data.id );
            
            // send the hue to Homey
            if( typeof callback == 'function' ) {
                callback( null, bulb.state.hue );
            }
        }
    }
}?