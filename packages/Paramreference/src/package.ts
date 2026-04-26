/* Do not change these import lines to match external modules in webpack configuration */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from 'datagrok-api/dg';

export const _package = new DG.Package();

//name: info
export function info() {
  grok.shell.info(_package.webRoot);
}

//name: BioreactorConfiguration
//tags: model, example
//description: Choose available bioreactor models and parameters - example of parameter referencing
//input: string bioreactor { choices: paramreference:ListBioreactors(); nullable: false }

//output: object result
export async function BioreactorConfiguration(
    bioreactor: string) {
    grok.shell.info(`Chosen bioreactor: bioreactor`);

}

//name: Get Synthon Spaces
//description: Get all available synthon spaces from Chem package files
//output: list<string> result
export async function ListBioreactors() : Promise<string[]> {
    try {
        const files = await _package.files.list('bioreactors/', false, 'csv');
        return files.map((f) => f.name);
    } catch (_e) {
        return [];
    }
}
