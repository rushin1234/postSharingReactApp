// projectid '659ff188ee06c6f5ca5e'
// api endpoint 'https://cloud.appwrite.io/v1'

import { Client, Account } from 'appwrite'

const client = new Client()
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('659ff188ee06c6f5ca5e')

export const account = new Account(client)