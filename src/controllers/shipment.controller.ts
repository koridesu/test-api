import {get, param, post, requestBody} from '@loopback/rest';

export class FileController {
  constructor() {}

  @get('/getShipments')
  public async getShipments() {
    return {
      shipments: [
        {
          shipmentId: '38479y2uırhwejkfnds',
          status: 'SHP0000003',
          referenceNo: 'SHP000001',
          creationDate: new Date(),
          exporterId: 'wad',
          exporterName: 'wad',
          importerName: 'wad',
          destinationCountry: 'TR',
          exitCountry: 'UA',
          exitDate: new Date(),
          laneType: 'RED',
          documents: [],
          infos: [],
          events: [],
          refreshDate: new Date(),
          loading: true,
        },
        {
          shipmentId: '38479y2uırhwejkfns2e',
          status: 'SHP0000002',
          referenceNo: 'SHP000002',
          creationDate: new Date(),
          exporterId: 'wad',
          exporterName: 'wad',
          importerName: 'wad',
          destinationCountry: '1008',
          exitCountry: '1010',
          exitDate: new Date(),
          laneType: 'RED',
          documents: [],
          infos: [],
          events: [],
          refreshDate: new Date(),
          loading: true,
        },
      ],
    };
  }
  @get('/shipments/{shipmentId}')
  public async getShipmentByShipmentId(
    @param.path.string('shipmentId')
    shipmentId: string,
  ) {
    return {
      shipment: {
        shipmentId: shipmentId,
        status: 'SHP0000002',
        referenceNo: 'SHP000001',
        creationDate: new Date(),
        exporterId: 'wad',
        exporterName: 'wad',
        importerName: 'wad',
        destinationCountry: 'TR',
        exitCountry: 'UA',
        exitDate: new Date(),
        laneType: 'RED',
        documents: [],
        infos: [],
        events: [],
        refreshDate: new Date(),
        loading: true,
      },
    };
  }
  // '/shipments?shipmentId=123456';

  @get('/shipments')
  public async getShipmentDetails(
    @param.query.string('shipmentId') shipmentId: string,
  ) {
    return {
      data: {
        shipmentId: '123456',
        status: 'ACCEPTED',
        remarks: '',
        grossWeight: 10,
        weightUnit: 'KG',
        packageQuantity: 2,
        packageType: 'kutu',
        measurements: '',
        houseWaybillNumber: 'sds',
      },
    };
  }

  @post('/uploadFile')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async createBucket(@requestBody() file: any): Promise<void> {
    console.log(JSON.stringify(file));
  }
}
