import { SKILLS } from './freelancerConstants'

export function theNameOfTheObject(value) {
  switch (value) {
    case 'languages':
      return SKILLS.languages
    case 'tools':
      return SKILLS.tools
    case 'libraries':
      return SKILLS.libraries
    case 'frameworks':
      return SKILLS.frameworks
  }
}
