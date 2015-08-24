package com.todolist.server;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.felix.dm.annotation.api.Component;

@Path("todo")
@Component(provides=Object.class)
public class TodoServer {
	
	private List<String> m_todoItems = Arrays.asList("Make coffee", "Go to work", "Do a standup");
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> getTodoItems() throws UnsupportedEncodingException {
		return m_todoItems;
	}
	
	@Path("addItem")
	@POST
	public void addItem(String todoItem) {
		m_todoItems.add(todoItem);
	}
	
	@Path("removeItem")
	@POST
	public void removeItem(String todoItem) {
		m_todoItems.remove(todoItem);
	}
}
