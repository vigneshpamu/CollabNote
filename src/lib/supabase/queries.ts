'use server'
import { files, folders, users, workspaces } from '../../../migrations/schema'
import db from './db'
import { File, Folder, Subscription, User, workspace } from './supabase.types'
import { and, eq, ilike, notExists } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export const createWorkspace = async (workspace: workspace) => {
  try {
    const response = await db.insert(workspaces).values(workspace)
    return { data: null, error: null }
  } catch (error) {
    console.log(error)
    return { data: null, error: 'Error' }
  }
}

export const deleteWorkspace = async (workspaceId: string) => {
  if (!workspaceId) return
  await db.delete(workspaces).where(eq(workspaces.id, workspaceId))
}

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where: (s, { eq }) => eq(s.userId, userId),
    })
    if (data) return { data: data as Subscription, error: null }
    else return { data: null, error: null }
  } catch (error) {
    console.log(error)
    return { data: null, error: `Error` }
  }
}
