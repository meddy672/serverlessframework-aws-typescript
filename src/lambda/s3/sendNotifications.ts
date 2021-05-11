import { S3Handler, S3Event } from 'aws-lambda'
import 'source-map-support'

export const handler: S3Handler = (event: S3Event) => {
    for (const record of event.Records) {
        const key = record.s3.object.key
        console.log('Processing s3 item with key:', key)
    }
}