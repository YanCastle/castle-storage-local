import * as fs from 'fs-extra-promise'
import { dirname } from 'path';
export default class LocalStorage {
    async write(path: string, data: any) {
        return await fs.writeFileAsync(path, data)
    }
    async read(path: string) {
        return (await fs.readFileAsync(path)).toString()
    }
    async readAsBuffer(path: string) {
        return await fs.readFileAsync(path)
    }
    async mkdir(path: string, mode: number = 0o777) {
        let dir = dirname(path);
        if (!await fs.existsAsync(dir)) {
            await this.mkdir(dir, mode)
        }
        await fs.mkdirAsync(path)
    }
    async unlink(path: string) {
        return await fs.unlinkAsync(path)
    }
    async ls(path: string) {
        if (this.isDirectory(path)) {
            return await fs.readdirAsync(path)
        } else {
            throw new Error(`${path} is not a directory`)
        }
    }
    async isDirectory(path: string) {
        try {

        } catch (error) {

        }
        return (await fs.statAsync(path)).isDirectory()
    }
}