import React from 'react'
import { Box, Octicon, Avatar, Text } from '@primer/react'
import { Tooltip } from '@primer/react/next'
import { PencilIcon } from '@primer/octicons-react'
import Link from './link'
import usePage from '../hooks/use-page'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const format = d => `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

// const pluralize = (word, count) => `${word}${count === 1 ? '' : 's'}`

const Contributors = ({ contributors = [], latestCommit }) => {
  if (!contributors.length) {
    return null
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Text sx={{ mr: 2 }}>
          총 {contributors.length}명의 기여자
        </Text>
        {contributors.map(login => (
          <Tooltip key={login} text={login}>
            <Link href={`https://github.com/${login}`} sx={{ lineHeight: 'condensedUltra', mr: 2 }}>
              <Avatar src={`https://github.com/${login}.png?size=40`} alt={login} />
            </Link>
          </Tooltip>
        ))}
      </Box>
      {latestCommit ? (
        <Text sx={{ fontSize: 1, mt: 1 }}>
          마지막 수정: <Link href={`https://github.com/${latestCommit.login}`}>{latestCommit.login}</Link>님,{' '}
          <Link href={latestCommit.url}>{format(new Date(latestCommit.date))}</Link>
        </Text>
      ) : null}
    </>
  )
}

const PageFooter = () => {
  const { editUrl, latestCommit, contributors = [] } = usePage().pageContext

  if (!editUrl && !contributors.length) {
    return null
  }

  return (
    <Box
      sx={{
        borderWidth: 0,
        borderTopWidth: 1,
        borderRadius: 0,
        mt: 8,
        py: 5,
        borderStyle: 'solid',
        borderColor: 'border.default',
      }}
    >
      <Box sx={{ display: 'grid', gap: 4 }}>
        {editUrl ? (
          <Link href={editUrl}>
            <Octicon icon={PencilIcon} sx={{ mr: 2 }} />
            이 페이지를 GitHub에서 편집하기
          </Link>
        ) : null}
        <Contributors contributors={contributors} latestCommit={latestCommit} />
      </Box>
    </Box>
  )
}

export default PageFooter
