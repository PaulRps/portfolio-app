import {JobExperience} from './job-experience.dto'
import {Education} from './education.dto'

export interface ResumeDataDto {
  experiences: JobExperience[]
  education: Education[]
  technologies: string[]
  interests: string[]
  projects: string[]
}
