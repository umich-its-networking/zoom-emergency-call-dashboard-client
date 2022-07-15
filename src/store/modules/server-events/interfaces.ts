interface ICaller {
    id: string;
    phone_number: string;
    extension_number: string;
    timezone: string;
    display_name: string;
    extension_type: string;
    site_id: string;
    site_name: string;
}

interface ICallee {
    phone_number: string;
    extension_number: string;
}

interface ILocation {
    ip: string[]
}

export interface ServerEventResponse {
    event: string;
    payload: {
        object: {
            caller: ICaller;
            callee: ICallee;
            location: ILocation;
            router: string;
            call_id: string;
            ringing_start_time: string;
            emergency_address: string;
            deliver_to: string;
        }
        account_id: string;
    }
    event_ts: string;
}

export interface ServerEventState {
    receivedEvents: ServerEventResponse[];
    connectionStatus: boolean;
}
