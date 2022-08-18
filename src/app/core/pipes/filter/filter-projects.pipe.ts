import {Pipe, PipeTransform} from '@angular/core'
import {Project} from 'src/app/shared/models/dto/project.dto'

@Pipe({
  name: 'filter'
})
export class FilterProjectsPipe implements PipeTransform {
  transform(list: Project[], filter?: string): Project[] {
    if (!filter) return list

    return list.filter((item) =>
      JSON.stringify(item.technologies).includes(filter!)
    )
  }
}
