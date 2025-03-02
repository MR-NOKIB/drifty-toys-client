import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useEffect, useState } from 'react';
import Card from './Card';
const Categories = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (categoryId) => {
        try {
            const res = await fetch(`http://localhost:5000/category/${categoryId}`)
            const data = await res.json();
            setToys(data);
            setLoading(false);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:5000/category/1`)
                const data = await res.json();
                setToys(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const selected = (index) => {
        if (index == 0) {
            setLoading(true);
            fetchData(1)
        }
        if (index == 1) {
            setLoading(true);
            fetchData(2)
        }
        if (index == 2) {
            setLoading(true);
            fetchData(3)
        }
        if (index == 3) {
            setLoading(true);
            fetchData(4)
        }
    }

    console.log(toys);
    const cards = <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center '>
            {
                toys.map(toy => <Card
                    key={toy._id}
                    toy={toy}
                ></Card>)
            }
        </div>
    </>

    return (
        <div className='mt-14'>
            <div>
                <h2 className='text-center custom-h1'>Shop by category</h2>
            </div>
            <div>
                <Tabs className={'py-7'} defaultIndex={0} onSelect={(index) => {
                    return selected(index);
                }}>
                    <TabList role="tablist" className='flex justify-center items-center tabs tabs-border mb-10'>
                        <Tab role="tab" className="tab tab-bordered">Sports Cars</Tab>
                        <Tab role="tab" className="tab tab-bordered">Race Cars</Tab>
                        <Tab role="tab" className="tab tab-bordered">Classic Cars</Tab>
                        <Tab role="tab" className="tab tab-bordered">Truck</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;