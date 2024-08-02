import React from 'react';

const DownloadProducts = () => {
    const fileHeaders = [
        'product_name',
        'price',
        'quantity',
        'total_price'
    ];

    function convertJSONToCSV(jsonData, columnHeaders) {
        if (jsonData.length === 0) {
            return '';
        }

        const headers = columnHeaders.join(',') + '\n';

        const rows = jsonData
            .map((row) => {
                return columnHeaders.map((field) => row[field] || '').join(',');
            })
            .join('\n');

        return headers + rows;
    }

    function downloadCSV(jsonData, headers) {
        const csvData = convertJSONToCSV(jsonData, headers);

        if (csvData === '') {
            alert('No data to export');
        } else {
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'product_data.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    return (
        <button
            onClick={() => {
                downloadCSV(dummyData, fileHeaders);
            }}
        >
            Export Product Data
        </button>
    );
};

const dummyData = [
    {
        "product_name": "Widget",
        "price": 50,
        "quantity": 2,
        "total_price": 100
    },
    {
        "product_name": "Gadget",
        "price": 100,
        "quantity": 1,
        "total_price": 100
    },
    {
        "product_name": "Tool",
        "price": 75,
        "quantity": 3,
        "total_price": 225
    },
    {
        "product_name": "Accessory",
        "price": 25,
        "quantity": 4,
        "total_price": 100
    },
    {
        "product_name": "Equipment",
        "price": 200,
        "quantity": 1,
        "total_price": 200
    }
];

export default DownloadProducts;