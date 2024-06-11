import { columns } from "./components/columns"
import LeadDataTable from "./components/data-table"

const Leads = () => {
    return(
        <div className="max-w-[1280px] mx-auto">
            <div className="mt-4 px-6">
            <div className="flex items-center justify-between">
                    <div className="mb-[26px]">
                        <h2 className="text-2xl md:text-3xl font-semibold">Lead Management</h2>
                        <p className="text-sm text-muted-foreground mt-2">Organize leads and track their progress effectively here</p>
                    </div>
                </div>
                <div>
                    <LeadDataTable 
                        columns={columns}
                        data={[{
                            lead_id: '1q2w3e-u',
                            subsource: 'Lkisos_090',
                            idnumber: '9701014800084',
                            firstnames: 'Arya Gorgeous',
                            surname: 'Stark',
                            cellular: '0827770009',
                            email: 'arya4@test.com',
                            historically_disadvantaged: '1',
                            province: 'Western Cape'

                        },
                        {
                            lead_id: '1q2w3e-u',
                            subsource: 'Lkisos_090',
                            idnumber: '9701014800084',
                            firstnames: 'Arya Gorgeous',
                            surname: 'Stark',
                            cellular: '0827770009',
                            email: 'arya4@test.com',
                            historically_disadvantaged: '1',
                            province: 'Western Cape'

                        },
                        {
                            lead_id: '1q2w3e-u',
                            subsource: 'Lkisos_090',
                            idnumber: '9701014800084',
                            firstnames: 'Arya Gorgeous',
                            surname: 'Stark',
                            cellular: '0827770009',
                            email: 'arya4@test.com',
                            historically_disadvantaged: '0',
                            province: 'Western Cape'

                        }
                        ]}

                        loading={false} 
                    />
                </div>
            </div>
                
        </div>
    )
}

export default Leads