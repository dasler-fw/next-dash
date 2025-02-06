import {fetchLatestInvoices} from "@/app/lib/data";
import React from 'react';

const Route = async () => {
    await fetchLatestInvoices();

    return null;
};

export default Route;
